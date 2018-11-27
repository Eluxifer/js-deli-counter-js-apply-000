function takeANumber(people, name){
  people.push(`${name}`);
  return(`Welcome, ${name}. You are number ${people.length} in line.`);
}
