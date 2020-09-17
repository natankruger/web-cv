import React from 'react';
import faker from 'faker';
import './responsiveTable.scss';

class ResponsiveTable extends React.Component {

  render() {

    return <section className="mx-auto">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Aniversário</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ faker.name.firstName() }</td>
          <td>{ faker.name.lastName() }</td>
          <td>{ faker.date.past().toDateString() }</td>
          <td>{ faker.internet.email() }</td>
        </tr>
      </tbody>
    </table>
    </section>
  }
}

export default ResponsiveTable;
