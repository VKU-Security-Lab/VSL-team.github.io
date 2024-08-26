export default function Header() {
    return `<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
        <div class="header-container">
            <a class="navbar-brand" href="/">
                <img src="/images/logo.png" alt="VSL - VKU Security Lab" id="logo-header" width="30" height="30" class="d-inline-block align-text-top">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/page/about_us/">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/page/member">Members</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/page/achievement">Achievement</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/page/writeups">Writeups</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/page/history">History</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
}