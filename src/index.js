const axios = require('axios')
const _ = require('lodash')

class Mbank {
  constructor(countryCode, username, password) {
    this.username = username
    this.password = password
    this.baseUrl = `https://online.mbank.${countryCode}/${countryCode}`
    this.cookie = undefined
  }

  async login() {
    const url = `${this.baseUrl}/LoginMain/Account/JsonLogin`

    const result = await axios.post(url, {
      Username: this.username,
      Password: this.password
    })

    if (result.status !== 200) {
      return false
    }

    this.cookie = result.headers['set-cookie']

    return true
  }

  keepAlive() {
    const url = `${this.baseUrl}/LoginMain/Account/JsonSessionKeepAlive`

    return axios.post(url, {}, {
      headers: {
        Cookie: this.cookie
      }
    })
  }

  async getAccounts() {
    const url = `${this.baseUrl}/Accounts/Accounts/List`

    const response = await axios.post(url, {}, {
      headers: {
        Cookie: this.cookie
      }
    })

    return response.data.properties.CurrentAccountsList
  }

  async getAccountByIban(iban) {
    const accounts = await this.getAccounts()

    return _.find(accounts, ['cID', iban])
  }
}

module.exports = Mbank