# Version 0.0.5
BUG : Correct a bug with missing break line on multi values - https://github.com/nosebit/reakit/issues/2.
FEA : Add a path argument to i18nInit action function.
BUG : Correct a bug with passing path as 2nd argument in i18nInit action function.
ENH : Set container to have position relative.
BUG : Correct a bug with importing Field.Select component inside Field.Location.
BUG : Correct a bug with missing remove image ("x") in Field.Select multi value.
ENH : Add docs task to makefile that generates only the docs production version.
ENH : Allow Header and Authorization to Http module.
ENH : Http can receive a baseUrl as option.
ENH : Formart baseUrl and url of Http Module to avoid conflict.
QUE : Change the name of project from ReaKit to Darch.
ENH : Make docs rule Phony in Makefile.
REL : Release version 0.0.5.
FIX : Add tag 0.0.5 tag and version to package.json to enable release.

# Version 0.0.4
BUG : Correct a bug with incorrect import of select in field.location component.

# Version 0.0.3
ENH : Use lowercase for i18n assets lang.
FEA : Allow specify fallbackLang in i18n init action.
ENH : Add contributing guidelines.
ENH : Add usage guide section in readme.
ENH : Add npm badge in readme.
ENH : Add MIT license.
ENH : Add GitHub link in docs navbar.
ENH : Add docs link to package.json description.
FIX : Correct navbar GitHub item position.
FIX : Generate new docs to apply navbar changes.
FIX : Use http docs link instead of https.
FIX : Add js mark to code block in readme.
FEA : Begin to translate doc to en-us.
FEA : Add Field.Switch component.
FEA : Add Scroll component with infinite scrolling and sticky scroll.
ENH : Remove important hint from bar styles.
FEA : Add size prop to Container component to specify max width of the container.
FEA : Add clearSearchOnSelect prop to Select component.
FEA : Add preventSearchBlurOnComplete to Select option.
FEA : Enable onSubmit funtion to retorn field to be reset in Form component.
FEA : Add i18n.Moment component to "translate" dates an times using the new section "formats" in i18n translation spec.
ENH : Regenerate lib new components scroll and location.
UPD : Update package.json version to 0.0.3.

# Version 0.0.2
ENH : Remove unused highlightjs dependency (we are using prismjs now).
BUG : Correct a bug with utils.js requiring reakit/lib/utils/.. modules. Now we generate utils folder within lib.

# Version 0.0.1
INI : Add gitignore, changelog and readme files.
FEA : Add bar, button, container, dropdown, field, form, grid, i18n, menu, modal, section, spinner and toaster components.
FEA : Add http (based on axios), logger, redux and storage utils.
FEA : Add common styles.
ENH : Update package.json with required dependencies.
FEA : Add progress components (bar/radial).
FEA : Add password field component.
FEA : Add i18n utils module with translate function.
FEA : Add style utils that uses css variables to compute sizes.
ENH : Create docs folder with static doc site.
FEA : Add CNAME with custom domain reakit.nosebit.com for docs site.
FEA : Create initial docs for Grid and Bar.
FEA : Add docs for Form and Field components.
FEA : Generate lib and docs for first realease.
VER : Change version 0.0.0 to 0.0.1 in changelog and package.json.
