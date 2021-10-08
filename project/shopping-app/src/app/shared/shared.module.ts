/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NgModule } from '@angular/core';
import components from './components';
import directives from './directives';
import modules from './modules';
import pipes from './pipes';

const allDeclarations = [...components, ...directives, ...pipes];
const allModules = [...modules];

@NgModule({
  declarations: allDeclarations,
  imports: allModules,
  exports: [...allModules, ...allDeclarations]
})
export class SharedModule {}
