import React from 'react';
import faker from 'faker';
import './responsiveTable.scss';

class ResponsiveTable extends React.Component {

  render() {

    return <section className="mx-auto">
    <table className="responsive-table flex-md-column flex-row mt-4">
      <thead className="d-none d-md-flex">
        <tr className="d-flex w-100">
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Aniversário</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody className="w-100">
          <tr className="d-flex flex-column flex-md-row">
            <td>
              <span className="item-caption d-flex d-md-none d-sm-flex">Nome</span>
              <span className="item-content ml-auto ml-md-0">{ faker.name.firstName() }</span>
            </td>
            <td>
              <span className="item-caption d-flex d-md-none d-sm-flex">Sobrenome</span>
              <span className="item-content ml-auto ml-md-0">{ faker.name.lastName() }</span>
            </td>
            <td>
              <span className="item-caption d-flex d-md-none d-sm-flex">Aniversário</span>
              <span className="item-content ml-auto ml-md-0">{ faker.date.past().toDateString() }</span>
            </td>
            <td>
              <span className="item-caption d-flex d-md-none d-sm-flex">Email</span>
              <span className="item-content ml-auto ml-md-0">{ faker.internet.email() }</span>
            </td>
          </tr>
      </tbody>
    </table>
    </section>
  }
}

export default ResponsiveTable;
