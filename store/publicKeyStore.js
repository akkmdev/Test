import { types } from "mobx-state-tree";

const publicKeyStore = types
  .model({
    thememode: "light",
  })
  .actions((theme) => ({
    editThememode(thememode) {
      theme.thememode = thememode;
    },
  }));

const store = publicKeyStore.create();

export default store;
