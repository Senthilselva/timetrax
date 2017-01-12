import React, { Component } from 'react';
import { Link } from 'react-router';

class Company extends Component {
    render(){
        // Get data from route props
        const companies = this.props.route.data;
        // Map through companies and return linked companies
        const companyNode = companies.map((company) => {
            return (
                <Link
                    to={"/company/"+company.id}
                    className="list-group-item"
                    key={company.id}>
                    {company.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Company page</h1>
                <div className="list-group">
                    {companyNode}
                </div>
            </div>
        );
    }
}

export default Company
