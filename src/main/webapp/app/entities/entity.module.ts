import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EffichentFicheModule } from './fiche/fiche.module';
import { EffichentFicheSetModule } from './fiche-set/fiche-set.module';
import { EffichentTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EffichentFicheModule,
        EffichentFicheSetModule,
        EffichentTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EffichentEntityModule {}
