class Person {

  static validade(person) {
    if (!person.name) throw new Error('name is required')
    if (!person.cpf) throw new Error('cpf is required')
  }

  static process(person) {
    this.validade(person)
    const personFormat = this.format(person)
    this.save(personFormat)
    return 'ok'
  }

  static format(person) {
    const [name, ...lastName] = person.name.split(' ')
    return {
      cpf: person.cpf.replace(/\D/g, ''),
      name,
      lastName: lastName.join(' ')
    }
  }

  static save(person){

    if(!['cpf','name', 'lastName'].every(prop=>person[prop]))
      throw new Error(`cannot save person, ${JSON.stringify(person)}`)
  }
}


export default Person