import React from "react";
import { Link, Element } from "react-scroll";

export default function privacy() {
  return (
    <div className="container max-w-6xl mx-auto px-5 py-12">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold">Data Deletion Request</h1>
      </div>
      <p className="mb-6">
        Thank you for using CACSA APP. If you would like to request the deletion
        of your data, please follow the steps below:
      </p>

      <ol className="list-decimal list-inside mb-6">
        <li>Go to the settings page in the app.</li>
        <li>Click on the Delete my account button.</li>
        <li>Fill out the provided form with the necessary information.</li>
        <li>Submit the form to initiate the data deletion request.</li>
      </ol>

      <p className="mb-6">
        Please note that the following types of data will be deleted upon your
        request:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Personal information (e.g., name, email address, etc.)</li>
        <li>Usage data (e.g., app activity, interactions, etc.)</li>
        <li>Preferences and settings</li>
      </ul>

      <p className="mb-6">
        We will make our best efforts to promptly process your request. However,
        please be aware that certain data may be retained for additional periods
        as required by applicable laws or regulations.
      </p>

      <p className="mb-6">
        If you have any questions or need further assistance regarding your data
        deletion request, please contact our support team at
        <a href="mailto:hello@thinktech.com"> hello@thinktech.com</a>
      </p>

      <p className="mb-6">Thank you for your understanding and cooperation.</p>
    </div>
  );
}
