NODE_MODULES     = ./node_modules
NODE_MODULES_BIN = $(NODE_MODULES)/.bin

ALL_PACKAGES = $(shell cd packages && find . -type d -maxdepth 1 -not -name '.' | sed -e 's/^\.\///')

########################################################################################################################
#
# HELP
#
########################################################################################################################

# COLORS
RED    = $(shell printf "\33[31m")
GREEN  = $(shell printf "\33[32m")
WHITE  = $(shell printf "\33[37m")
YELLOW = $(shell printf "\33[33m")
RESET  = $(shell printf "\33[0m")

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
# A category can be added with @category
HELP_HELPER = \
    %help; \
    while(<>) { push @{$$help{$$2 // 'options'}}, [$$1, $$3] if /^([a-zA-Z\-\%]+)\s*:.*\#\#(?:@([a-zA-Z\-\%_]+))?\s(.*)$$/ }; \
    print "usage: make [target]\n\n"; \
    for (sort keys %help) { \
    print "${WHITE}$$_:${RESET}\n"; \
    for (@{$$help{$$_}}) { \
    $$sep = " " x (32 - length $$_->[0]); \
    print "  ${YELLOW}$$_->[0]${RESET}$$sep${GREEN}$$_->[1]${RESET}\n"; \
    }; \
    print "\n"; }

help: ##prints help
	@perl -e '$(HELP_HELPER)' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

########################################################################################################################
#
# GLOBAL
#
########################################################################################################################

init: ##@global cleanup/install/bootstrap
	@$(MAKE) clean
    ifdef $(PURE)
		@yarn install --pure-lockfile
    else
		@yarn install
    endif
	@$(MAKE) bootstrap
	@$(MAKE) link

clean: ##@global uninstall node modules, remove transpiled code & lock files
	@rm -rf node_modules
	@rm -rf package-lock.json
	@rm -rf website/.cache
	@$(foreach pkg,$(ALL_PACKAGES),$(call clean_dir_all,packages/$(pkg)))

define clean_dir_all
	rm -rf $(1)/node_modules
	rm -rf $(1)/package-lock.json
endef

bootstrap: ##@global lerna bootstrap
	@$(NODE_MODULES_BIN)/lerna bootstrap

link: ##@global symlink packages & extensions
	@$(NODE_MODULES_BIN)/lerna link

########################################################################################################################
#
# WEBSITE
#
########################################################################################################################

website-dev: ##@website start website in dev mode
	@echo "$(YELLOW)Starting website in dev mode$(RESET)"
	@cd website && "$(NODE_MODULES_BIN)/gatsby" develop

website-build: ##@website build website
	@echo "$(YELLOW)Building edikit website$(RESET)"
	@cd website && "$(NODE_MODULES_BIN)/gatsby" build

website-serve: website-build ##@website build & serve website
	@echo "$(YELLOW)Serving edikit website$(RESET)"
	@cd website && "$(NODE_MODULES_BIN)/gatsby" serve
