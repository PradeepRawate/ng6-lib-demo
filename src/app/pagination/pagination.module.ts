import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationPipe } from './pagination.pipe';
import { PaginationComponent } from './pagination.component';
import { PagerService } from './pagination.service';

export { PagerService } from './pagination.service';
export { PaginationComponent } from './pagination.component';
export { PaginationPipe } from './pagination.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PaginationPipe,
        PaginationComponent,
    ],
    providers: [PagerService],
    exports: [PaginationPipe,
        PaginationComponent]
})
export class PaginationModule { }
