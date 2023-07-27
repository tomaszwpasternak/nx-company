import {DOCUMENT} from '@angular/common';
import {inject, Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {ThemeMode} from '@shared/ui/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly localstorageKey = 'theme';

  private renderer2: Renderer2 = inject(RendererFactory2).createRenderer(null, null);

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public initialize() {
    this.setTheme(localStorage.getItem(this.localstorageKey) as ThemeMode || ThemeMode.DARK);
  }

  private setTheme(theme: ThemeMode) {
    this.removeOldTheme();
    this.renderer2.addClass(this.document.body, theme);
  }

  private removeOldTheme(): void {
    this.renderer2.removeClass(this.document.body, ThemeMode.LIGHT);
    this.renderer2.removeClass(this.document.body, ThemeMode.DARK);
  }
}