export class User {

    constructor(
        public email: string,
        public role: Role,
        private id: string,
        private token: string,
        private tokenExpirationDate: Date) {
        
    }



    get getToken() {
        if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
            return null;
        }
        return this.token;
    }



}
export enum Role {
    user,
    admin
}