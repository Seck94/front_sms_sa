import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public 'username' = '' ;
  public 'Prenom' = '' ;
  public 'Nom' = '' ;
  public 'Email' = '' ;
  public 'password' = '' ;
  public 'Avatar' = '' ;
  image: any;

  file(event: any): void {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      this.image = reader.result;
    }
  }

  // private file = '';

  constructor(private addUser: AddUserService) { }

  ngOnInit(): void {
  }
  AjouterUtilisateur(){
    alert('dfghjk');
    const formdata = new FormData();
    formdata.append('Nom', this.Nom );
    formdata.append('Prenom', this.Prenom );
    formdata.append('username', this.username );
    formdata.append('Email', this.Email );
    formdata.append('password', this.password );
    formdata.append('Avatar', this.file );
    formdata.append('Statut', 'sdfghj' );

    this.addUser.addUser(formdata).subscribe(data=>{console.log(data);
    })
  }

  onfile = (event: any) => {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}
