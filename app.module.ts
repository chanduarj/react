import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.route';

// ag-grid
import { AgGridModule } from "ag-grid-angular/main";
import 'ag-grid-enterprise/main';

import { LicenseManager } from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_for_Production_100Devs7_June_2017__MTQ5Njc5MDAwMDAwMA==6e33e78ac45a010e77934615c2e35722");

import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';

import { CustomFormsModule } from 'ng2-validation'
import { BlockUIModule } from 'ng-block-ui';
import { DndModule } from 'ng2-dnd';
import * as moment from 'moment';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landingmodule/Component/landing-page/landing-page.component';
import { HeaderComponent } from './headerModule/Component/header/header.component';
import { NavbarComponent } from './navbarModule/Component/navbar/navbar.component';

import { ViewHistoryFlowPlanComponent } from './view-history-flow-plan/view-history-flow-plan.component';
import { CustomSearchFilterComponent } from './view-history-flow-plan/custom-search-filter/custom-search-filter.component';
import { CustomDataRangePickerFilterComponent } from './view-history-flow-plan/custom-data-range-picker-filter/custom-data-range-picker-filter.component';

import { HistoryGridComponent } from './view-history-flow-plan/history-grid/history-grid.component';
import { HistoryGridHeaderComponent } from './view-history-flow-plan/history-grid/history-grid-header/history-grid-header.component';
import { DateComponentFilterComponent } from './view-history-flow-plan/history-grid/date-component-filter/date-component-filter.component';
import { HistoryGridSubtableComponent } from './view-history-flow-plan/history-grid/history-grid-subtable/history-grid-subtable.component';
import { CellRangeOperationModalComponent } from './cell-range-operation-modal/cell-range-operation-modal.component';
import { ColumnFilterComponent } from './view-history-flow-plan/history-grid/column-filter/column-filter.component';
import { MapDefaultViewComponent } from './view-history-flow-plan-map-view/map-default-view-legend/map-default-view.component';
import { TooltipModule, DatepickerModule, AlertModule } from 'ngx-bootstrap';
import { DatepickerWrapperComponent } from './date-picker/date-picker.component';
import { StartEndPicker } from './date-picker/start-end-date-picker.component';
import { ClickOutsideModule}   from './click-outside.module';
import { MapsComponent } from './maps/maps.component';
import { CustomFilterComponent } from './view-history-flow-plan/history-grid/custom-filter/custom-filter.component';
import { NgDraggableModule } from 'angular-draggable';
import { ColumnSelectorComponent } from './view-history-flow-plan/history-grid/column-selector/column-selector.component';
import { filterService } from "./service/filters-service.service";
import { flowBroadcast } from './view-history-flow-plan/history-grid/column-selector/broadcaster';
import {AgePipe} from './filter-component/filter-pipe';
import { AutocompleteModule } from 'ng2-input-autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    NavbarComponent,
    ViewHistoryFlowPlanComponent,
    HomePageComponent,
    CustomDataRangePickerFilterComponent,
    CustomSearchFilterComponent,
    HistoryGridComponent,
    HistoryGridHeaderComponent,
    DateComponentFilterComponent,
    HistoryGridSubtableComponent,
    CellRangeOperationModalComponent,
    ColumnFilterComponent,
    MapDefaultViewComponent,
    // FxDatepickerComponent,
    DatepickerWrapperComponent,
    StartEndPicker,
    MapsComponent,
    CustomFilterComponent,
    ColumnSelectorComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    NgDraggableModule,
    FormsModule,
    HttpModule,
    routing,
    BlockUIModule,
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    CustomFormsModule,
    ClickOutsideModule,
    AgGridModule.withComponents(
      [
        HistoryGridHeaderComponent,
        DateComponentFilterComponent,
        HistoryGridSubtableComponent
      ]
    ),
    DndModule.forRoot(),
    AutocompleteModule.forRoot()
  ],
  providers: [filterService,flowBroadcast],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
