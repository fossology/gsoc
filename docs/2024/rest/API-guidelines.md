---
sidebar_position: 3
title: REST API Guidelines
author: Divij Sharma
tags: [gsoc24, rest]
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Divij Sharma <divijs75@gmail.com>
-->

Since this project primarily focuses on REST API development and improvement, it is crucial to establish a comprehensive guideline from the beginning. This guideline will serve as a set of rules to follow and provide a clear objective to achieve. After researching various reputable open-source projects and reviewing several design guides, I have prepared a detailed guideline document. Please refer to the table below for more information.

<table>
	<tr>
		<th>**#**</th>
		<th>**Guideline**</th>
		<th>**Description**</th>
		<th>**Example**</th>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>1</td>
		<td style={{ verticalAlign: 'top' }}>**Uniform Interface**</td>
		<td style={{ verticalAlign: 'top' }}>
			The uniform interface principle in RESTful API design
			advocates for a consistent and **standardised** approach to
			interactions between clients and servers. Advantages-
			<ul>
				<li>Predictability</li>
				<li>Standardisation</li>
				<li>Scalability</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			This is widely used in FOSSology, for instance, a user can
			send a POST request to `/upload` endpoint to post a new
			upload and can get that particular upload by making a GET
			request at `/upload/{id}`.
			![get-action](/img/reactUI/api/APIGuidelines/1.1_getRequest.png)
			![post-action](/img/reactUI/api/APIGuidelines/1.2_postRequest.png)
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>2</td>
		<td style={{ verticalAlign: 'top' }}>**Platform Independent**</td>
		<td style={{ verticalAlign: 'top' }}>
			Any client should be able to call the API, regardless of how
			the API is implemented internally. This requires
			**consistent data sharing** rules and formats. Advantages-
			<ul>
				<li>Flexibility</li>
				<li>Integration</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Consider a RESTful API for a weather service. Clients, such
			as web applications, mobile apps, and IoT devices, can
			retrieve weather data using standardised API endpoints,
			regardless of the programming languages or frameworks used
			to develop these clients.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>3</td>
		<td style={{ verticalAlign: 'top' }}>**Backward Compatible**</td>
		<td style={{ verticalAlign: 'top' }}>
			The web API should be able to evolve and add functionality
			independently from client applications. As the API evolves,
			existing client applications should continue to function
			without modification. Advantages-
			<ul>
				<li>Gradual updates</li>
				<li>Stability</li>
				<li>Strategic updates</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Suppose a social media platform introduces a new endpoint
			for retrieving user profile information in a more efficient
			manner. To ensure backward compatibility, the platform
			retains support for the existing endpoint structure,
			allowing older client applications to continue accessing
			user profiles without any disruptions. FOSSology implements
			this by supporting V1 REST API endpoints in deprecated mode.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>4</td>
		<td style={{ verticalAlign: 'top' }}>**Stateless Behaviour**</td>
		<td style={{ verticalAlign: 'top' }}>
			REST APIs use a stateless request model. The only place
			where information is stored is in the resources themselves,
			and each request should be an **atomic operation**. For this
			to hold, each request must contain all the information
			necessary to understand and process the request. Advantages-
			<ul>
				<li>Caching</li>
				<li>Consistency</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Consider a shopping website with a RESTful API for managing
			user sessions and shopping carts. Each client request, such
			as adding items to the cart or proceeding to checkout,
			includes all the necessary information (e.g., item IDs,
			quantities) for the server to process the request. The
			server does not store any client-specific data between
			requests, ensuring that the API remains stateless and
			scalable, regardless of the number of concurrent users.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>5</td>
		<td style={{ verticalAlign: 'top' }}>**Resource-Oriented Design**</td>
		<td style={{ verticalAlign: 'top' }}>
			REST APIs are structured around **resources**, which
			represent any object, data, or service accessible by
			clients. **Also, resources of the same type should be clubbed
			under the same endpoint**. Each resource is uniquely
			identified by a **URI (Uniform Resource Identifier)**,
			providing a consistent and predictable means of access where
			CRUD operations can be defined. Advantages-
			<ul>
				<li>Easy maintenance</li>
				<li>Uniformity</li>
			</ul>
			*The value for these path parameters MUST NOT contain any
			unescaped "generic syntax" characters described by
			[RFC3986](https://tools.ietf.org/html/rfc3986#section-3).*
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Suppose we have a RESTful API for managing user accounts in
			an e-commerce platform. Each user account is treated as a
			resource, with a unique URI (`/users/{id}`) representing the
			resource. Clients can perform CRUD operations on user
			accounts using standard HTTP methods enabling seamless
			interaction with the API endpoints. Also implemented in
			FOSSology
			![user-id](/img/reactUI/api/APIGuidelines/5_ResourceOrientation.png)
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>6</td>
		<td style={{ verticalAlign: 'top' }}>**Entity-Centric URIs**</td>
		<td style={{ verticalAlign: 'top' }}>
			Base resource URIs on **nouns representing business entities
			(plural nouns for collections)** rather than verbs
			indicating operations. Ensure each business entity has a
			distinct and **simple URI**, reflecting its unique identity
			and purpose within the system. Advantages-
			<ul>
				<li>Semantic Consistency</li>
				<li>Clarity and intuitiveness</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Suppose we have a RESTful API for managing products on an
			e-commerce platform. Each product is considered a business
			entity, and the URIs for accessing these products follow a
			noun-based pattern, such as `/products/{product_id}`. This
			approach ensures that each product has a unique and distinct
			URI, facilitating efficient resource identification and
			interaction within the API.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>7</td>
		<td style={{ verticalAlign: 'top' }}>**Hierarchical Organisation**</td>
		<td style={{ verticalAlign: 'top' }}>
			Organise resources in a hierarchical manner to establish a
			structured and intuitive API architecture. Use
			**parent-child relationships** to represent nested
			resources, ensuring logical grouping and defined scope
			within the API. **With each /, the scope of the resource
			should become more specific**. Advantages-
			<ul>
				<li>Logical Structuring</li>
				<li>Simplified Navigation</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			In a content management system (CMS) API, blog posts may be
			organised under a parent resource representing a user's
			blog. The hierarchical URI structure could be
			`/user/{uid}/blog/{bid}`, where each segment represents a
			nested relationship between resources. This organisation
			provides a clear and intuitive path for accessing blog posts
			within the context of a specific user and blog.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>8</td>
		<td style={{ verticalAlign: 'top' }}>**Decouple Web API from Data Sources**</td>
		<td style={{ verticalAlign: 'top' }}>
			Think of the web API as an **abstraction of the database**.
			If necessary, introduce a mapping layer (DAO) between the
			database and the web API. That way, client applications are
			isolated from changes to the underlying database scheme.
			Advantages-
			<ul>
				<li>Abstraction</li>
				<li>Security</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			In a web API for a retail platform, the API endpoints should
			interact with an abstraction layer or service interface that
			encapsulates data access logic. This abstraction shields the
			API from direct dependencies on database implementations,
			enabling the use of various storage solutions (e.g., SQL
			databases, NoSQL databases, cloud storage) without affecting
			the API's external behaviour.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>9</td>
		<td style={{ verticalAlign: 'top' }}>**Media types**</td>
		<td style={{ verticalAlign: 'top' }}>
			Standardise the use of media types, also known as MIME
			types, to specify data formats exchanged between clients and
			servers in the HTTP protocol. For textual data, the widely
			supported **JSON** format (media type = application/json) is
			commonly used in web APIs. Advantages-
			<ul>
				<li>Interoperability</li>
				<li>Clear communication</li>
			</ul>
			_The media type definitions SHOULD be in compliance with
			[RFC6838](https://datatracker.ietf.org/doc/html/rfc6838)._
		</td>
		<td style={{ verticalAlign: 'top' }}>
			FOSSology widely use **"application/json”** media type in
			response
			![media-type-1](/img/reactUI/api/APIGuidelines/9.1_mediaTypes.png)
			![media-type-2](/img/reactUI/api/APIGuidelines/9.2_mediaTypes.png)
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>10</td>
		<td style={{ verticalAlign: 'top' }}>**Conform to HTTP semantics**</td>
		<td style={{ verticalAlign: 'top' }}>
			Ensure that the web API adheres to the semantic meaning of
			HTTP methods defined by the HTTP protocol. Utilise the
			common HTTP methods—**GET, POST, PUT, PATCH, and DELETE**—to
			perform operations that correspond to the creation,
			retrieval, modification, and deletion of resources, aligning
			with the intended semantics of each method. Advantages-
			<ul>
				<li>Standardised communication</li>
				<li>Clarity & Performance</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![semantics](/img/reactUI/api/APIGuidelines/10_semantics.png)
			Standard HTTP methods deployed by FOSSology
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>11</td>
		<td style={{ verticalAlign: 'top' }}>**Status Codes**</td>
		<td style={{ verticalAlign: 'top' }}>
			Adhere to standardised HTTP status codes to convey the
			outcome of API requests accurately. HTTP status codes
			provide a clear indication of the success, failure, or
			specific conditions of each request, enabling clients to
			interpret and handle responses appropriately. Some common
			status codes are as follows:
			<ul>
				<li>
					**GET Method**:
					<ul>
						<li>200: OK</li>
						<li>204: No Content</li>
						<li>404: Not Found</li>
					</ul>
				</li>
				<li>
					**POST Method**:
					<ul>
						<li>200: OK</li>
						<li>201: Created</li>
						<li>204: No Content</li>
						<li>400: Bad Request</li>
					</ul>
				</li>
				<li>
					**PUT Method**:
					<ul>
						<li>200: OK</li>
						<li>201: Created</li>
						<li>204: No Content</li>
						<li>409: Conflict</li>
					</ul>
				</li>
				<li>
					**PATCH Method**:
					<ul>
						<li>400: Bad Request</li>
						<li>409: Conflict</li>
						<li>415: Unsupported Media Type</li>
					</ul>
				</li>
				<li>
					**DELETE Method**:
					<ul>
						<li>204: No Content</li>
						<li>404: Not Found</li>
					</ul>
				</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![codes](/img/reactUI/api/APIGuidelines/11_StatusCodes.png)
			When a client submits a GET request to retrieve a resource
			from a RESTful API, the server responds with a 200 OK status
			code if the request is successful, along with the requested
			resource in the response body. In the event that a resource is not
			found, the server returns a 404 Not Found status code,
			indicating to the client that the requested resource does
			not exist. By consistently using appropriate status codes in
			responses, the API ensures clear and meaningful
			communication with clients, enhancing usability and
			reliability.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>12</td>
		<td style={{ verticalAlign: 'top' }}>**Empty sets in message bodies**</td>
		<td style={{ verticalAlign: 'top' }}>
			Any time the body of a successful response is empty, the
			status code should be 204 (No Content). For empty sets, such
			as a response to a filtered request with no items, the
			status code should **still be 204 (No Content)**, not 200
			(OK).
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![no-content](/img/reactUI/api/APIGuidelines/12_NoContent.png)
			Deleting a user returns 204 (No Content)
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>13</td>
		<td style={{ verticalAlign: 'top' }}>**Consistent Casing Conventions**</td>
		<td style={{ verticalAlign: 'top' }}>
			Adopt consistent casing conventions, such as **camelCase**
			or **snake_case**, for naming identifiers within the API,
			including resource names, query parameters, and JSON keys
			for both **request** and **response** objects. Advantages-
			<ul>
				<li>Readability and clarity</li>
				<li>Alignment with industry standards</li>
			</ul>
			_**All field names in the specification are case-sensitive**_
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![naming](/img/reactUI/api/APIGuidelines/13_ConsistentNaming.png)
			FOSSology response object using camelCase keys
		</td>
	</tr>
    <tr>
		<td style={{ verticalAlign: 'top' }}>14</td>
		<td style={{ verticalAlign: 'top' }}>**Pagination**</td>
		<td style={{ verticalAlign: 'top' }}>
			Exposing a collection of resources through a single URI can
			lead to applications fetching large amounts of data when
			only a subset of the information is required. Instead, the
			API can allow passing a filter in the query string of the
			URI, such as **page** and **size**, from which only the
			specific subset required is sent as a response. Advantages-
			<ul>
				<li>Saves bandwidth</li>
				<li>Improves user experience</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			a GET request to `/blog?page=2&size=10` would fetch the
			second page of blogs, with each page containing up to 10
			blogs. Pagination headers such as Total Pages, Total Items,
			and Page Number can also be included in the response to
			provide clients with metadata about the paginated results.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>15</td>
		<td style={{ verticalAlign: 'top' }}>**Filtering**</td>
		<td style={{ verticalAlign: 'top' }}>
			Incorporate filtering functionality into the API to allow
			clients to **retrieve specific subsets** of resources based
			on defined criteria. Filtering enables clients to tailor
			their requests to match their requirements, facilitating
			efficient data retrieval and enhancing the flexibility of
			the API. Advantages-
			<ul>
				<li>Customised data retrieval</li>
				<li>Enhanced usability</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			In an e-commerce API, clients may need to retrieve products
			based on various attributes such as category, price range,
			or availability status. By implementing filtering
			functionality, clients can send requests like GET
			`/products?cat=ele&range=100-500` to retrieve electronics
			products within the specified price range. The API processes
			the filter parameters and returns only the relevant
			products, providing clients with the precise data they need
			for their applications.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>16</td>
		<td style={{ verticalAlign: 'top' }}>**Input fields**</td>
		<td style={{ verticalAlign: 'top' }}>
			Place input fields in one of the following based on the
			description:
			<ul>
				<li>
					**Headers**- Use headers for sensitive information
					or authentication data that should not be visible in
					URLs or easily accessible to users. They should be
					light- weight and contain protocol related
					information rather than business logic.
				</li>
				<li>
					**Query Parameters**- Use for filtering, sorting, or
					specifying additional options related to the
					request, such as pagination parameters or search
					queries. They should be expressive, intuitive, and
					self-descriptive to improve usability and
					readability. Do not include sensitive information
					here.
				</li>
				<li>
					**Body**- For large or complex data structures, such
					as JSON objects or file uploads, use the request
					body to encapsulate the data. Generally, body is
					used when the arguments don't have a flat key:value
					structure.
				</li>
				<li>
					**Path**- Use path parameters to specify variable
					parts of the URL path. Include input fields that
					represent identifiers or resource paths directly in
					the URL, such as IDs, slugs, or resource names.
				</li>
				<li>
					**Cookie**- Use cookies for storing stateful
					information or session tokens on the client side.
				</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			<ul>
				<li>
					Headers to store sensitive info like cookies and
					Authorization.
					![headers](/img/reactUI/api/APIGuidelines/16_inputFields.png)
				</li>
				<li>
					Query parameters are used like
					<ul>
						<li>
							Filtering: `/products?type=home`
						</li>
						<li>
							Pagination: `/products?page=1&limit=20`
						</li>
						<li>
							Sorting: `/products?sort=price&order=asc`
						</li>
						<li>Search: `/products?query=laptop`</li>
					</ul>
					Specific to FOSSology, query params can be used to
					store name, id, shortName etc.
				</li>
				<li>
					Body is used to store heavy payloads like JSON
					objects, or licenseText in terms of FOSSology.
				</li>
				<li>
					Path is used together with Path Templating, where
					the parameter value is actually part of the
					operation's URL. This does not include the host or
					base path of the API. For example, in
					`/items/{itemId}`, the path parameter is itemId.
				</li>
				<li>
					When a user logs in to the website, the server sets
					cookies to store the user's preferences. For
					example, the server sets a cookie with values like
					`lang=en&theme=dark`. Each time
					the user visits a page on the website, the browser
					automatically sends the cookie along with the
					request and server response accordingly.
				</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>17</td>
		<td style={{ verticalAlign: 'top' }}>**Versioning**</td>
		<td style={{ verticalAlign: 'top' }}>
			Versioning enables a web API to indicate the features and
			resources that it exposes, and a client application can
			submit requests that are directed to a specific version of a
			feature or resource. Service names and API-class names
			should be chosen carefully so that they do not change
			when products are versioned or rebranded. Advantages-
			<ul>
				<li>Compatibility</li>
				<li>Maintenance</li>
				<li>Documentation</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			Versioning can have many examples like:
			![Version](/img/reactUI/api/APIGuidelines/17_Versioning.png)
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>18</td>
		<td style={{ verticalAlign: 'top' }}>**Use of Models**</td>
		<td style={{ verticalAlign: 'top' }}>
			Utilise models to encapsulate and represent data structures
			exchanged between clients and the API. Models serve as
			structured representations of resources and response data.
			Advantages-
			<ul>
				<li>Consistency and standardisation</li>
				<li>Encapsulation</li>
				<li>Semantic enforcement</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![models](/img/reactUI/api/APIGuidelines/18_models.png)
			Semantic enforcement in one of the models at FOSSology.
		</td>
	</tr>
	<tr>
		<td style={{ verticalAlign: 'top' }}>19</td>
		<td style={{ verticalAlign: 'top' }}>**Concrete Architecture**</td>
		<td style={{ verticalAlign: 'top' }}>
			Adopt a concrete architecture and directory separation
			strategy for organising the API codebase. Implementing a
			clear architectural pattern, such as MVC
			(Model-View-Controller) or similar, along with structured
			directory separation, enhances code maintainability,
			scalability, and overall project structure. Advantages-
			<ul>
				<li>Code maintainability</li>
				<li>Team Collaboration</li>
			</ul>
		</td>
		<td style={{ verticalAlign: 'top' }}>
			![Architecture](/img/reactUI/api/APIGuidelines/19_ConcreteArchitecture.png)
			.
    		Folder structure of FOSSology REST API.
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>20</td>
    	<td style={{ verticalAlign: 'top' }}>**JSON Representation**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		With regard to JSON representation **property names, and URL
    		query parameters, services** should:
    		<ul>
    			<li>Choose meaningful and succinct names,</li>
    			<li>
    				Do not reuse any names reserved for other purposes by
    				these guidelines,
    			</li>
    			<li>
    				Avoid internal naming conflicts by reusing names for
    				dissimilar purposes,
    			</li>
    			<li>Use plural nouns for arrays,</li>
    			<li>Use singular nouns for non-arrays,</li>
    			<li>Begin with lowercase letters,</li>
    			<li>Prefer camelCase over snake_cases,</li>
    			<li>
    				Follow SCIM Schema naming when the field represents
    				data from the directory,
    			</li>
    			<li>Be case-sensitive.</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![JSONRepresentation](/img/reactUI/api/APIGuidelines/20_JSONRepresentation.png)
    		In this example:
    		<ul>
    			<li>
    				Property names are meaningful and succinct, such as
    				userId, userName, emailAddress, etc.
    			</li>
    			<li>Plural nouns are used for arrays (roles).</li>
    			<li>
    				Singular nouns are used for non-arrays (userId,
    				userName, etc.).
    			</li>
    			<li>
    				Property names begin with lowercase letters and use
    				camelCase.
    			</li>
    			<li>
    				SCIM Schema naming convention is followed where
    				appropriate (userId, userName, emailAddress).
    			</li>
    			<li>
    				The representation is case-sensitive, adhering to
    				the guideline.
    			</li>
    		</ul>
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>21</td>
    	<td style={{ verticalAlign: 'top' }}>**Date and Time fields**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		All fields with a date/time should follow **ISO 8601** and be
    		in UTC timezone.
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		The [W3C](https://www.w3.org/TR/NOTE-datetime) note provides
    		clarification and examples.
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>22</td>
    	<td style={{ verticalAlign: 'top' }}>**Cross-Origin Resource Sharing (CORS) Policy**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		The API service must adhere to CORS specifications,
    		supporting both simple and preflight request flows. The
    		Access-Control-Allow-Origin header should be returned in
    		responses to enable cross-origin resource sharing.
    		Advantages-
    		<ul>
    			<li>Security compliance</li>
    			<li>Enforcement of policies</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![cors](/img/reactUI/api/APIGuidelines/22_CORS.png) CORS
    		headers returned by FOSSology in a response.
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>23</td>
    	<td style={{ verticalAlign: 'top' }}>**Error Handling**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		Standardise the format and handling of error objects
    		returned by the API to provide consistent and informative
    		error responses to clients. Error objects should include
    		relevant information such as error codes, messages, and
    		additional details to assist developers in troubleshooting
    		and debugging issues. Advantages-
    		<ul>
    			<li>Consistency in error responses</li>
    			<li>Better error communication</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![error](/img/reactUI/api/APIGuidelines/23_ErrorHandling.png)
    		Example of a good error response. Usually, errors are handled
    		using error middleware.
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>24</td>
    	<td style={{ verticalAlign: 'top' }}>**Data Validation**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		Implement robust data validation mechanisms to ensure the
    		integrity, consistency, and security of incoming data, either
    		by using models or regular expressions. Advantages-
    		<ul>
    			<li>Prevents Data Corruption</li>
    			<li>Enhances Security</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![validation](/img/reactUI/api/APIGuidelines/24_DataValidation.png)
    		Data validation using regular expressions as FOSSology
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>25</td>
    	<td style={{ verticalAlign: 'top' }}>**Security**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		Prioritise security measures throughout the design,
    		development, deployment, and maintenance phases of the REST
    		API to mitigate potential threats and vulnerabilities.
    		Security considerations include implementing authentication,
    		authorization, encryption, input validation, rate limiting,
    		and protection against common attacks such as injection,
    		XSS, CSRF, and unauthorised access. Advantages-
    		<ul>
    			<li>Data Confidentiality</li>
    			<li>Prevention of Attacks</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![security](/img/reactUI/api/APIGuidelines/25_Security.png)
    		Authentication middleware at FOSSology
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>26</td>
    	<td style={{ verticalAlign: 'top' }}>**Testing**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		Adopt a comprehensive testing strategy to ensure the
    		reliability, functionality, and performance of the REST API.
    		Implement **unit tests, integration tests, and end-to-end
    		tests** to validate individual components, interactions
    		between components, and the behaviour of the API as a whole.
    		Testing should cover various scenarios, including positive
    		and negative cases, edge cases, error handling, and
    		concurrency. Advantages-
    		<ul>
    			<li>Reliability</li>
    			<li>Enhanced Quality Assurance</li>
    		</ul>
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![testing](/img/reactUI/api/APIGuidelines/26_Testing.png)
    		Test suite for FOSSology REST API
    	</td>
    </tr>
    <tr>
    	<td style={{ verticalAlign: 'top' }}>27</td>
    	<td style={{ verticalAlign: 'top' }}>**Documentation**</td>
    	<td style={{ verticalAlign: 'top' }}>
    		Use clear and consistent language, along with structured
    		formats such as OpenAPI Specification (formerly known as
    		Swagger), to organise and present the documentation
    		effectively. Keep the documentation up-to-date with the
    		latest changes and enhancements. Also, API documentation
    		should happen before working on the code, as it provides a
    		solid aim to achieve.
    	</td>
    	<td style={{ verticalAlign: 'top' }}>
    		![documentation](/img/reactUI/api/APIGuidelines/27_Documentation.png)
    		FOSSology REST API documentation being viewed on Swagger
    		editor using openapi.yml file
    	</td>
    </tr>
</table>

## References

    - Open Source Projects
    	- [FOSSology](https://github.com/fossology/fossology)
    	- [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)
    	- [Rocket.Chat-Open-API](https://github.com/RocketChat/Rocket.Chat-Open-API)
    	- [Meshery](https://github.com/meshery/meshery)
    	- [Meshery Schemas](https://github.com/meshery/schemas)
    - [API Discussions at Siemens](https://community.siemens.com/)
    - [Siemens API Catalogue](https://developer.siemens.com/apis.html)
    - [API Design by Microsoft](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)
    - [Google Cloud API Design](https://cloud.google.com/apis/design)
    - [RESTful API design by Red Hat](https://restful-api-design.readthedocs.io/en/latest/)
    - [Cisco API Design Guide](https://github.com/CiscoDevNet/api-design-guide)
    - [JSON API](https://jsonapi.org/)
