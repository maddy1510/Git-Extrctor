import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

export const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        try {
            const { data } = await Axios.get(repos_url);
            setRepos(data);
        } catch (error) {
            console.error("Error fetching repositories:", error);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, [repos_url]);

    return (
        <div style={{ marginTop: "20px" }}>
            <ListGroup>
                {repos.map(repo => (
                    <ListGroupItem
                        key={repo.id}
                        style={{
                            border: '1px solid #dee2e6',
                            borderRadius: '4px',
                            marginBottom: '10px',
                            padding: '15px',
                            backgroundColor: '#f8f9fa'
                        }}
                    >
                        <a
                            style={{ textDecoration: 'none', color: '#007bff' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repo.html_url}
                        >
                            <div
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#343a40',
                                    marginBottom: '10px'
                                }}
                            >
                                {repo.name}
                            </div>
                        </a>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            {repo.language}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            {repo.description}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Size: {repo.size}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Open issues: {repo.open_issues}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Default branch: {repo.default_branch}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Created date: {new Date(repo.created_at).toLocaleDateString()}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Updated date: {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                        <div
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '14px',
                                color: '#6c757d',
                                marginBottom: '5px'
                            }}
                        >
                            Pushed date: {new Date(repo.pushed_at).toLocaleDateString()}
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};
