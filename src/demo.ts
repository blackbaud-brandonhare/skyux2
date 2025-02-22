import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  SkyModule
} from './core';

import {
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAutocompleteDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent,
  SkyCheckboxDemoComponent,
  SkyColorpickerDemoComponent,
  SkyColorpickerReactiveDemoComponent,
  SkyColorpickerTemplateDrivenDemoComponent,
  SkyConfirmDemoComponent,
  SkyDatepickerDemoComponent,
  SkyDefinitionListDemoComponent,
  SkyDropdownDemoComponent,
  SkyEmailValidationDemoComponent,
  SkyErrorDemoComponent,
  SkyFileAttachmentDemoComponent,
  SkyFilterDemoComponent,
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyFlyoutDemoComponent,
  SkyGridDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyIconDemoComponent,
  SkyInfiniteScrollDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarCustomDemoComponent,
  SkyListViewChecklistDemoComponent,
  SkyListViewGridDemoComponent,
  SkyLookupDemoComponent,
  SkyMediaQueryDemoComponent,
  SkyModalDemoComponent,
  SkyNavbarDemoComponent,
  SkyNumericDemoComponent,
  SkyPageSummaryDemoComponent,
  SkyPagingDemoComponent,
  SkyPopoverDemoComponent,
  SkyProgressIndicatorDemoComponent,
  SkyRadioDemoComponent,
  SkyRepeaterDemoComponent,
  SkySearchDemoComponent,
  SkySectionedFormDemoComponent,
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,
  SkySelectFieldDemoComponent,
  SkySortDemoComponent,
  SkyTabsDemoComponent,
  SkyTextExpandDemoComponent,
  SkyTextExpandRepeaterDemoComponent,
  SkyTextHighlightDemoComponent,
  SkyTileDemoComponent,
  SkyTimepickerDemoComponent,
  SkyToastDemoComponent,
  SkyToastCustomDemoComponent,
  SkyTokensDemoComponent,
  SkyToolbarDemoComponent,
  SkyUrlValidationDemoComponent,
  SkyVerticalTabsDemoComponent,
  SkyWaitDemoComponent,
  SkyWizardDemoComponent,

  // Entry components
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkyProgressIndicatorDemoFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTileDemoTile1Component,
  SkyTileDemoTile2Component,
  SkyWizardDemoModalComponent,
  SkyFlyoutDemoInternalComponent,
  SkyFlyoutDemoInternalSimpleComponent
} from './demos';

import { SkyDemoService } from './demos/demo.service';

const components = [
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAutocompleteDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent,
  SkyCheckboxDemoComponent,
  SkyColorpickerDemoComponent,
  SkyColorpickerReactiveDemoComponent,
  SkyColorpickerTemplateDrivenDemoComponent,
  SkyConfirmDemoComponent,
  SkyDatepickerDemoComponent,
  SkyDefinitionListDemoComponent,
  SkyDropdownDemoComponent,
  SkyEmailValidationDemoComponent,
  SkyErrorDemoComponent,
  SkyFileAttachmentDemoComponent,
  SkyFilterDemoComponent,
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyFlyoutDemoComponent,
  SkyFlyoutDemoInternalComponent,
  SkyFlyoutDemoInternalSimpleComponent,
  SkyGridDemoComponent,
  SkyIconDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyInfiniteScrollDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarCustomDemoComponent,
  SkyListViewChecklistDemoComponent,
  SkyListViewGridDemoComponent,
  SkyLookupDemoComponent,
  SkyMediaQueryDemoComponent,
  SkyModalDemoComponent,
  SkyNavbarDemoComponent,
  SkyNumericDemoComponent,
  SkyPageSummaryDemoComponent,
  SkyPagingDemoComponent,
  SkyPopoverDemoComponent,
  SkyProgressIndicatorDemoComponent,
  SkyRadioDemoComponent,
  SkyRepeaterDemoComponent,
  SkySearchDemoComponent,

  SkySectionedFormDemoComponent,
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,
  SkySelectFieldDemoComponent,
  SkySortDemoComponent,
  SkyTabsDemoComponent,
  SkyTextExpandDemoComponent,
  SkyTextExpandRepeaterDemoComponent,
  SkyTextHighlightDemoComponent,
  SkyTileDemoComponent,
  SkyTimepickerDemoComponent,
  SkyToastDemoComponent,
  SkyToastCustomDemoComponent,
  SkyTokensDemoComponent,
  SkyToolbarDemoComponent,
  SkyUrlValidationDemoComponent,
  SkyVerticalTabsDemoComponent,
  SkyWaitDemoComponent,
  SkyWizardDemoComponent,
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkyProgressIndicatorDemoFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTileDemoTile1Component,
  SkyTileDemoTile2Component,
  SkyWizardDemoModalComponent
];

@NgModule({
  declarations: components,
  providers: [SkyDemoService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkyModule
  ],
  exports: components,
  entryComponents: components
})
export class SkyDemoModule { }

export * from './demos';
export * from './demos/demo.service';
