import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbBadgeModule, NbButtonModule, NbCalendarModule, NbCalendarRangeModule, NbCardModule, NbChatModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbPopoverModule, NbProgressBarModule, NbRadioModule, NbSearchModule, NbSelectModule, NbSpinnerModule, NbStepperModule, NbTabsetModule, NbToggleModule, NbTooltipModule, NbTreeGridModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from 'app/@theme/theme.module';
import { LoaderComponent } from './components/loader/loader.component';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { DataTablesModule } from "angular-datatables";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [LoaderComponent, NumberOnlyDirective],
  imports: [
    CommonModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbTabsetModule,
    NbInputModule,
    NbCheckboxModule,
    NbToggleModule,
    NbRadioModule,
    NbDatepickerModule,
    NbPopoverModule,
    NbDialogModule.forChild(),
    NbTooltipModule,
    NbWindowModule.forChild(),
    NbAlertModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbChatModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbTreeGridModule,
    NbButtonModule,
    NbUserModule,
    NbActionsModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    NbSearchModule,
    NbContextMenuModule,
    NbIconModule,
    NbEvaIconsModule,
    NbLayoutModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbTabsetModule,
    NbInputModule,
    NbCheckboxModule,
    NbToggleModule,
    NbRadioModule,
    NbDatepickerModule,
    NbPopoverModule,
    NbDialogModule,
    NbTooltipModule,
    NbWindowModule,
    NbAlertModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbChatModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbTreeGridModule,
    NbButtonModule,
    NbUserModule,
    NbActionsModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    NbSearchModule,
    NbContextMenuModule,
    NbIconModule,
    NbEvaIconsModule,
    NbLayoutModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NumberOnlyDirective,
    DataTablesModule
  ]
})
export class SharedModule { }
