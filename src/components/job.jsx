import React, { Component } from 'react';
import { Link } from 'react-router';

class Job extends Component {
    render(){
        // Get data from route props
        const jobs = this.props.route.data;
        // Map through jobs and return linked jobs
        const jobNode = jobs.map((job) => {
            return (
                <Link
                    to={"/jobs/"+job.id}
                    className="list-group-item"
                    key={job.id}>
                    {job.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Jobs page</h1>
                <div className="list-group">
                    {jobNode}
                </div>
            </div>
        );
    }
}

export default Job
