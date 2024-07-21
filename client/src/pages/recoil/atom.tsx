import { atom } from "recoil";

export const isAuthAtom = atom({
    key: 'isAuthAtom',
    default: false
})

export const userAtom = atom({
    key: 'userAtom',
    default: {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }
})

export const accountAtom = atom({
    key: 'accountAtom',
    default: {
        accountId: '',
        accountName: '',
        balance: ''
    }
})