import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() toggle: any;
  @Input() selectedPath: any;
  @Output() toggled = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  onToggle(){
    this.toggle = !this.toggle;
    this.toggled.emit(this.toggle)
  }

  settings(){
    this.router.navigate(['/home/settings'])
  }

  toggleTheme(){

  }

}
