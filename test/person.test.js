import { describe, it, expect, jest } from '@jest/globals'
import Person from '../src/person'

describe('#Person suit', () => {
  describe('#validade', () => {

    it('should throw if name is present', () => {

      const mockInvalidPerson = {
        cpf: '102.589.987-67'
      }

      expect(() => Person.validade(mockInvalidPerson)).toThrow(new Error('name is required'))

    })

    it('should throw if cpf is present', () => {

      const mockInvalidPerson = {
        name: 'will'
      }

      expect(() => Person.validade(mockInvalidPerson)).toThrow(new Error('cpf is required'))

    })

    it('should not throw person', () => {

      const mockInvalidPerson = {
        name: 'will',
        cpf: "140.987.877-43"
      }

      expect(() => Person.validade(mockInvalidPerson)).not.toThrow()

    })
  })
  describe('#format', () => {
    it('should format person name and cpf', () => {

      // arrange = prepare
      const mockPerson = {
        cpf: '123.456.778-09',
        name: 'will vini rodri'
      }

      // act = executa 
      const formatPerson = Person.format(mockPerson)

      //assert =  validar
      const expected = {
        cpf: '12345677809',
        name: 'will',
        lastName: 'vini rodri'
      }

      expect(formatPerson).toStrictEqual(expected)
    })
  })
  describe('#process', () => {
    it('should process valid person', () => {

      //arrange = prepare
      const mockPerson = {
        cpf: '123.456.778-09',
        name: 'will vini rodri'
      }

      jest.spyOn(
        Person,
        Person.validade.name
      ).mockReturnValue()

      jest.spyOn(
        Person,
        Person.format.name
      ).mockReturnValue({
        cpf: '12345677809',
        name: 'will',
        lastName:'vini rodri'
      })

      //act = executar
      const result = Person.process(mockPerson)

      //assert
      expect(result).toStrictEqual('ok')
    })
  })
})