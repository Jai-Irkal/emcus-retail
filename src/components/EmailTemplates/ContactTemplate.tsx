import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactTemplate({ firstName, lastName, email, subject, message }: EmailTemplateProps) {
    return (
        <div>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {firstName} {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong><br />{message}</p>
        </div>
    );
}