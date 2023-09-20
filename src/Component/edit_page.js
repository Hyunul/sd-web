import React from 'react';
import ReactDOM from 'react-dom';

const edit_page = () => {
    ReactDOM.render(
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Shop Item - Start Bootstrap Template</title>
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                <link href="css/styles_final.css" rel="stylesheet" />
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container px-4 px-lg-5">
                        <a class="navbar-brand" href="/">
                            LABIS
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="row gx-4 gx-lg-5 align-items-center">
                            <div class="col-md-6">
                                <img class="card-img-top mb-5 mb-md-0" src="assets/img/corgi.png" alt="..." />
                            </div>
                            <div class="col-md-6">
                                <h1 class="display-5 fw-bolder">Image Editing</h1>
                                <div class="fs-5 mb-5">
                                    <div class="d-flex">
                                        <button
                                            class="btn btn-outline-dark flex-shrink-0"
                                            type="button"
                                            id="select"
                                            href="/"
                                        >
                                            select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="py-5 bg-dark">
                    <div class="container">
                        <p class="m-0 text-center text-white">Copyright &copy; www.labis.co.kr 2023</p>
                    </div>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/design.js"></script>
            </body>
        </html>
    );
};

export default edit_page;
