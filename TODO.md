# TODO: Translate Services and Works

## Tasks
- [ ] Update `salon/src/data/index.ts`: Replace hardcoded English strings in `srvicelist` with translation keys from locales (e.g., "services.hairStyling.name" for Sname, "services.hairStyling.description" for des).
- [ ] Update `salon/src/Pages/HomeP.tsx`: Modify the services section to use `t()` for `service.Sname` and `service.des` to display translated text.
- [ ] Update `salon/src/Pages/OurW.tsx`: Fix the translation key generation for work categories to match the camelCase keys in locales (e.g., "hairStyling" instead of "hairstyling"). Use a mapping or adjust the string manipulation.
- [ ] Test the translations: Run the app and verify that services and works display correctly in Arabic and Turkish.
- [ ] If needed, update locales to ensure all keys are present and accurate.
