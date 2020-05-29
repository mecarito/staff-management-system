import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { Staffbio } from './../myprofile/staffbio';


@Component({
  selector: 'app-allprofiles',
  templateUrl: './allprofiles.component.html',
  styleUrls: ['./allprofiles.component.scss']
})
export class AllprofilesComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  public rowData;
  public results;

  public columnDefs = [
    {headerName: ' Staff  Biography ',
    headerClass: 'staffbio',
    children: [
    { field: 'id', width: 70, cellClass: 'id',  pinned: 'left'},
    { field: 'firstName', pinned: 'left', },
    { field: 'middleName', pinned: 'left', },
    { field: 'lastName', pinned: 'left'},
    { field: 'mobileNumber' },
    { field: 'telephoneNumber' },
    { field: 'staffId' },
    { field: 'email' },
    { field: 'website' }
    ]
     },
    {headerName: 'Education position',
    headerClass: 'educationposition',
    children: [
     { field: 'position'},
     { field: 'highestEducation'},
     { field: 'researchGroup'}
    ]
   },
    {headerName: 'Administration',
    headerClass: 'administration',
    children: [
      { field: 'officeNo'},
      { field: 'administrativeRole'},
    ]
     },
];

defaultColDef = {
  width: 120,
  sortable: true,
  resizable: true,
  filter: true,
  lockVisible: true,
  // editable: true
  // unSortIcon: true,
};

url =  'http://localhost:3000/staffinfo';

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      data => this.rowData = data
    );
  }


  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data.id );

    selectedData.length >= 1 ?
      this.http.delete<Staffbio>(this.url, { params: { selectedData },  responseType: 'json' } ).
      subscribe( val =>  {alert(val.response);
                          this.agGrid.api.removeItems(selectedNodes); } ) :
     alert('select atleast 1 staff member');


    // console.log(this.agGrid.api.getSelectedRows());

}


}
