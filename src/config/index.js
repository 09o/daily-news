import { MODE_TYPE } from './enum'

const BASE_URL_DEV = 'http://localhost:8080'
const BASE_URL_TEST = 'http://localhost:3000'
const BASE_URL_PRO = 'http://localhost:8181'

const MODE = MODE_TYPE.DEV

export const BASE_URL = [BASE_URL_DEV, BASE_URL_TEST, BASE_URL_PRO][MODE]