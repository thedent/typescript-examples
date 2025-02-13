type Email = string;
export const emails = new Set<Email>();

emails.add('test@gtest.com');
emails.add('blabla@BlaBlaBla.org');

emails.add(true);
emails.add({ id: 'jfsdlfjlksdjfdl' });
