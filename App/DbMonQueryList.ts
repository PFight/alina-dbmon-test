import { Alina } from "./Imports";
import { Query, DbMonQuery } from "./DbMonQuery";

export class DbMonQueryList extends Alina.SingleNodeComponent {  
  template = Alina.makeTemplate(`
      @queryComponent
  `);

  update(quries: Query[]) {
    this.root.mount(Alina.AlRepeat).repeatEx(quries, {
      template: this.template,
      container: this.root.elem.parentElement,
      insertBefore: this.root.elem,
      update: (query, queryModel) => {
        query.findNode("@queryComponent").mount(DbMonQuery).update(queryModel);
      }
    });
  }
}
