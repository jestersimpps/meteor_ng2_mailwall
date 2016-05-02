import 'reflect-metadata';
import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouterLink} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MeteorComponent} from 'angular2-meteor/build/meteor_component';

let name = 'register';

@Component({
    selector: name,
    templateUrl: `/client/imports/auth/${name}/${name}.html`,
    directives: [RouterLink]
})


export class register extends MeteorComponent {

    signupForm: ControlGroup;
    error: string;

    constructor(private router: Router) {
        super();

        let fb = new FormBuilder();

        this.signupForm = fb.group({
            name: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.error = '';
    }

    signup(credentials) {
        if (this.signupForm.valid) {
            Accounts.createUser({ email: credentials.name + '@mailwall.me', password: credentials.password }, (err) => {
                if (err) {
                    this.error = err;
                }
                else {
                    this.router.navigate(['Private']);
                }
            });
        }
    }
}
