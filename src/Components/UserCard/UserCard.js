import React from 'react';
import { Card, CardBody } from 'reactstrap';

const UserCard = ({ user }) => {
    return (
        <Card
            style={{
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '20px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
            }}
            className="text-center mt-3 mb-4"
        >
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={user.html_url}
                style={{ display: 'block', marginBottom: '15px' }}
            >
                <img
                    src={user.avatar_url ? user.avatar_url : 'Images/github-logo.png'}
                    alt={`${user.login}'s avatar`}
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '3px solid #007bff',
                    }}
                    className="img-thumbnail"
                />
            </a>
            <CardBody>
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '10px',
                    }}
                >
                    {user.login}
                </div>
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    {user.name || 'No name provided'}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    {user.location || 'Location not available'}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    {user.bio || 'No bio available'}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    <strong>Public Repositories:</strong> {user.public_repos}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    <strong>Followers:</strong> {user.followers}
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#555',
                        marginBottom: '10px',
                    }}
                >
                    <strong>Available for hire:</strong> {user.hireable ? 'YES' : 'NOPE'}
                </div>
            </CardBody>
        </Card>
    );
};

export default UserCard;
