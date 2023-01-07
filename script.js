function telephoneCheck(str) {
  const regex = /^(1[\s]?)?((?:[(](?:[0-9][0-9][0-9])[)][\s]?)|(?:(?:[0-9][0-9][0-9])[\s.-]?))((?:[0-9][0-9][0-9][0-9][0-9][0-9][0-9])|(?:[0-9][0-9][0-9][\s.-][0-9][0-9][0-9][0-9]))$/
  //Paste the RegEx in a tool like regexr.com to more clearly see its logic.
  return regex.test(str);
}

telephoneCheck("555-555-5555");
