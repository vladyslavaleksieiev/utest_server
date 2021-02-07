export const validateString = (
  str: string,
  regexp: RegExp,
  name: string,
): IError | undefined => {
  if (!str) {
    return { message: `${name} should be provided` };
  }

  if (!regexp.test(str)) {
    return { message: `${name} should match regexp` };
  }
};
