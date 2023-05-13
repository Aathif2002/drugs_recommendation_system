import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { CoreService } from 'src/app/admin/core.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  record: any = {};
    displayedColumns: string[] = [
      'id',
      'drugsName',
      'genericName',
      'rx',
      'dateofupdate',
      'depertment',
      'disease',
      'pregnancy',
      'csa',
      'alchohol',
      
    ];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(
      public hs:HomeService,
      private _dialog: MatDialog,
      private _empService: AdminService,
      private _coreService: CoreService,
     
    ) {}
  
    ngOnInit(): void {
      this.getEmployeeList();
    }
  
    // openAddEditEmpForm() {
    //   const dialogRef = this._dialog.open(OneComponent);
    //   dialogRef.afterClosed().subscribe({
    //     next: (val) => {
    //       if (val) {
    //         this.getEmployeeList();
    //       }
    //     },
    //   });
    // }
  
    getEmployeeList() {
      this._empService.getEmployeeList()
      .subscribe({
        next: (res) => {
          if(this.hs.filterhealthcare){
            res = res.filter((x:any) => x.disease == this.hs.filterhealthcare);
          }
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    // deleteEmployee(id: number) {
    //   this._empService.deleteEmployee(id).subscribe({
    //     next: (res) => {
    //       this._coreService.openSnackBar('Drugs deleted!', 'done');
    //       this.getEmployeeList();
    //     },
    //     error: console.log,
    //   });
    // }
  
    // openEditForm(data: any) {
    //   const dialogRef = this._dialog.open(OneComponent, {
    //     data,
    //   });
  
    //   dialogRef.afterClosed().subscribe({
    //     next: (val) => {
    //       if (val) {
    //         this.getEmployeeList();
    //       }
    //     },
    //   });
    // }
   
   
  }
  
  
  
