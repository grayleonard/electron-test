// Taken from http://aurelia.io/docs.html#/aurelia/framework/latest/doc/article/getting-started
export class Welcome {
	heading = 'Hello world';
	firstName = 'Theo';
	lastName = 'Adorno';

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	submit() {
		alert(`Welcome, ${this.fullName}!`);
	}
} 
