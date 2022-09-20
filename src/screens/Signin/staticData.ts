import isEmail from 'validator/lib/isEmail';

 interface ISignInInputs {
    labelName: string,
    name:string,
    secureTextEntry:boolean,
    validate: (value:string) => string | undefined,
    id:number,
}

export const signInForm:ISignInInputs[] = [
    {
        id:1,
        labelName: 'Login',
        name:'email',
        secureTextEntry:false,
        validate: (value:string) => {
            if(value) {
              return  isEmail(value) ? undefined : 'Email is incorrect!'
            }
            return 'Required field!'
        }
    },
    {
        id:2,
        labelName: 'Password',
        name:'password',
        secureTextEntry:true,
        validate: (value:string) => {
            if(value) {
             if(value.length >= 6) {
                if(/^(?=.*[a-z])$/.test(value)) {
                    return 'should contain at least one lower case'
                }
                if(/^(?=.*[A-Z])$/.test(value)) {
                    return 'should contain at least one upper case'
                }
                if(/^(?=.*[!@#\$%\^&\*])$/.test(value)) {
                    return 'should contain at least one special character'
                }
                if(/^(?=.*[0-9])$/.test(value)) {
                    return 'the string must contain at least 1 numeric character'
                }
                return undefined
            }
            return 'The string must be six characters or longer'

            }
            return 'Required field!'
        }
    }
]