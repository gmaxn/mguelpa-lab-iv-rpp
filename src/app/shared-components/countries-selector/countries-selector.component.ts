import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countries-selector',
  templateUrl: './countries-selector.component.html',
  styleUrls: ['./countries-selector.component.css']
})
export class CountriesSelectorComponent implements OnInit {

  @Input()
  public countries:any[];
  @Input()
  public filtered: any[];

  @Output()
  public selection: EventEmitter<string> = new EventEmitter<string>();

  public errorMessage: string;


  
  public _filterTerm: string;

  get filterTerm(): string {
    return this._filterTerm;
  }

  set filterTerm(value: string) {
    this._filterTerm = value;
    this.filtered = this.filterTerm ? this.performFilter(this._filterTerm) : this.countries;
  }

  constructor(
  ) { }



  ngOnInit(): void {
  }

  onSelection(event:Event) {
    const selection = (<HTMLElement>event.currentTarget).getAttribute("countryName");
    this.selection.emit(selection);
  }

  performFilter(filterBy: string): any {

    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter(
      (country: any) => country.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
