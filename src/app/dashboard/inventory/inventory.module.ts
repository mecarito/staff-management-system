import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerlabModule } from './computerlab/computerlab.module';
import { ElectroniclabModule } from './electroniclab/electroniclab.module';
import { OfficesModule } from './offices/offices.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComputerlabModule,
    ElectroniclabModule,
    OfficesModule
  ]
})
export class InventoryModule { }
