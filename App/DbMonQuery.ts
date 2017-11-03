import { Alina } from "./Imports";

export interface Query {
  formatElapsed: number;
  query: string;
  elapsedClassName: string;
}

export class DbMonQuery extends Alina.AlinaComponent {
  template = Alina.makeTemplate(`
      <td class="Query @elapsedClass">
        @formatElapsed
        <div class="popover left">
          <div class="popover-content">@query</div>
          <div class="arrow"/>
        </div>
      </td>
  `);

  update(queryModel: Query) {
    this.replace(this.template, (td) => {
      td.set("@formatElapsed", queryModel.formatElapsed);
      td.set("@query", queryModel.query);
      td.set("@elapsedClass", queryModel.elapsedClassName);
    });
  }
}