import { DataStorageService } from './../shared/data-storage.service';
import { NgModule } from "@angular/core";
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { ShoppingListService } from "app/shooping-list/shooping-list.service";
import { RecipeService } from "app/recipes/recipe.service";
import { AuthService } from 'app/auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports : [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {

}
