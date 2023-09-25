import React from 'react';
import './edit_page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const edit_page = () => {
    return (
        <div className="App">
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
                            <img
                                class="card-img-top mb-5 mb-md-0"
                                src="assets/img/corgi.png"
                                alt="..."
                            />
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
        </div>
    );
};

export default edit_page;
