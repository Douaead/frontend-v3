import { Component, OnInit } from '@angular/core';
import { ScrapeService } from './scrape.service';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})

export class EmploiComponent implements OnInit {
  articles: any[] = [];

  constructor(private scrapeService: ScrapeService) {}

  ngOnInit() {
    this.scrapeService.getArticles().subscribe({
      next: (data) => this.articles = data,
      error: (err) => console.error(err),
      complete: () => console.log('Scraping complete')
    });
  }
}
