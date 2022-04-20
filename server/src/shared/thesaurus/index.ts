const thesaurus = {
  username: {
    en: 'Username',
    ru: 'Имя пользователя',
  },

  email: {
    en: 'E-mail',
    ru: 'E-mail',
  },

  password: {
    en: 'Password',
    ru: 'Пароль',
  },
};

// The function returns a value in the required language.
// Otherwise, returns the initial value.
//
export const getValue = (field: string, lang?: string) => {
  const innerLang = !!lang ? lang : 'ru';

  if (thesaurus[field] && thesaurus[field][innerLang]) {
    return thesaurus[field][innerLang];
  }

  return field;
};
