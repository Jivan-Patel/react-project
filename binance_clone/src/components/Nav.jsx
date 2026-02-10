import React from 'react'

function Nav() {
    return (
        <header>
            <nav>
                <div className="navp1 navpart">
                    <div className="logo">
                        <a href="./index.html"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAADACAYAAAAp3fniAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABEeSURBVHgB7d1ddhNJmsbxiJRNUchzkFYwYgXjWkGbC3DRczGwgjIrKFhBmRUAKyj3CoCLGdrFBe4VlGsH6hVYnrJpDrYyOt6Q0mVcUmZkZuSX9P+do4MB2Wl95KOIyDffVAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHTG6eGdn04/3PlJAQDaQ8J5ctg3ciOkAUAprVpAwtkovX/933Rk9u8++PRCAcCaajygF4VzgpAGsM4aDei0cE4Q0gDWVWMB7RPOCUIawDpqJKDzhHOCkAawbmoP6CLhnCCkAayTWgO6TDgnCGkA66K2gA4RzglCGsA6qCWgQ4ZzgpAGsOoqD+gqwjlBSANYZZUGdJXhnCCkAayqygK6jnBOENIAVlElAV1nOCcIaQCrJnhANxHOCUIaWG0nbwYD1b8Y2S+3ldGjr/4zMhMVR2P5c/jg7EitgKABXTacjVJ/kz/tL/WDKqhtIX16uPXSaLOtQjFmolU0jrX5zf7tePjw/FgF4vO7Dh6e31eeTj5s7WhjlreOtY9lsPvpiQrg9Jf+z/b9M1JLN2X+Mdz9tK8qcPJLf08b9XPKXSbm0+a94ZPJRFUg+7FHr4e7v79VJWW+nrKt6ebT4aPJWAUk241U/BcT68dKgtmXVkfa6OM43nhd9Hea/NL/qGqmtT6+++DsuXy9oQIpPXKOzNvhg0978uXJYb9wSNsXcf/0wx3VlpB2gWfUjgpG2x9nn2kz+9vksD/WOn4VT795V3bHCP67GjNK/3lanX7ov7z74Py5Kr0pt53Rsv+PtB6ritjXIqt/+UDduXxm/9xXFch67FrF2yfvB8elgzPz9Qzr6gMhNjumyFjS/q52X9nR0cUzG7RHRusXuUfWNT7ePzb5h0gFEGBZ49ic3Xqa/GW4e76XjKaLmIf0ujT9H9kR0iv7Jvx48vdvn6mOMbF69v+H/cIzpqadvN/aUSnhmLAfqz+q5gzs++ONWx7ogJP3t0cyctWx+RgsIO3PkZ8nsw37YTVSHVE6oIOE86fN+zenf4R0biOto5cyIlUdEyv1qks7zXVRz/h+uAxkRKiasx1tXbR+fzj95dsfda/3a1UjVzvb2LMfVr/KspTqgFIBXVU4Jwjp/GRE2sGQ7tQILyEjPdnhfe+ftX5btbbPVk4P+y9lNmjDuer3wUCOGXQhGwoHdNXhnCCk85MdseHRWhGdGOFdF/V6+X5fOyq0I7dwB4wLaOtsZX6gs9YlOsmGto+kCwd0rPQ9VZxXOCfKhnQcR41eOaYJTY/WinAfLB1aRzdFpuGx3lPNGrjjFS2arcxGzv4zkYDGarp5pFqscECXCM1c4Vx2e3aU/2K4e7av2koreR7Gnjd/LRitFWHX0X/qwnr0fOQ1UjlpbX5oQTiO2jJbkTXngiPnsdbqwBj9Wm4q0m/tk3uU5/tNbHMocElgaKXK7CQ0c5bEFQrnottrfTgrV/P99u7u+VOf+7od+/bFYx25sq5R5jfEboQXrE66JskI77uq6oZD0Er/+HVBlLdKS+58zWcr/xx+/69XqiGzNfzIf/t2MGOmNow/b7xa9t7w2kfczwkTzvIhcfeh3/5bROkqjhwj21LhnHd7XQjnvOS5Gz46PzC3Nr9TXiNqPVLdNIr6F6090OlK60zxk4+08q78qJSbrTQ4y9Ibkfdr7EbK55v3ho/O9tMyJNlHBrvn9+yHkATn+E8/6zJ62vaRcyJIHbRHaAYJZ9/trWI4Xze8P5nYAxyZn9pRZO6qjpI1ybauR2eW1s2WrdKMWnIQV6oZGqmecR9yszMDM7n9+fuzZ7mXReeDmetZ4X7WX8ufVVmXIAEtUkIzaDhnbS9POHetrOsrtzcyly7iWJ+qDmt6hLeIT2mdmarncppx2n1adBC3kdmK7vk9/rKDLRnMuKyI9YsuDtxSA1pK6SaH/V99g2xBaOYKZym1kZvydHN7ecNZ37n4uNoleGasuq2xEd4yUbSRdUbg2I3cYvUu9V4tOohb92xFPuS8TkSxB/1CBapbGungrHppQF+rc96WICsQ0rnDWd4ocisS0kXC2X653dk66c+X2Tt3lD6K64iRvvPF+/1QNaNM6rTcmPi1++KbzYPMpY7mS+6uyFmotX1g6J7f0sZ0o7KDb12xMKAXnISSP6QLhHPy9yIhXSScr7bXsZB2jyEyWc/POGSnu8pkr9fKnR63YT3aq7TOfOPWN+fHCVIPZtdWcuf1HLumT7XMVnSk/ifzPloddOVAXpX+FNApZwjmC+mC4ZzIG9I+FoXz1fY6ENLy+5986D+zj+FXlREUdordib7YxkReoyQ3wmv4wFpWeeefQsWorINRA/XtxZ6qmJRySrdIj7uOdP/ijaqax/JGrHXhE9NWyVd10B6nbychHeSg37JwTsxDWoWoM0wL56vtNdCqVM5Gy+w5O+tNYG8XIzlXN/tn6td2ze1AdUHcO7bLAs91T2UeqNKx+bmp+uiT/+1ntmK9GSr2NTiSNpdp32dHkxL6r1TFzMatp/rLhbz3R+l3tGvjdrZSVX20ex6zdabhvmSUPU63pwIwkb5/83FfjaBz9NbINZJeJiucEyFG0j7hfLW9+kfSswMmabfZ7z3y+WGyHi8lSapDhn89f+VZS1/PCG+BaFNlHxxcECoeBwu365gZuCUXrZ74LHdUOlvZiEaZ99G6/UtzNXEBXaDxUamQ9g3nRJmQzhPOV9vr4oFDOTvKqOeyHq+66NamfKiMM+9nP7Dqfm28SuuWLSl5HCysq+ROjkmYS7+lLzdbqeKUex1nZobufvVRMFGJrnTbReon84ZzomhI6y1XAZD76HTnQtrYEIjUpKt9lWcH1ab3fUZ4rgtZnevRXlUHi5vu+BwsdMsKNb1ubrYivSuyjXTvInz1zM3rCC7Q9fr9kKIynd7iAtehKfI9f3yv/qfKyZR4sTvWBW8kPW5dH4uONCO/afjo87jxEd6iben05Y3MioOpOVBZoss9VZdvNvZVU7MVY2o/ftBlkRRwy1k2Kie31llgOl13V7qV7YK33GjWjLx7V1YRjY/wbvAprYunm6n7z/C/z48zzyxU5se6TshpdLYSZW+zyy0KQnNr0HlDumg4J/KGZunTPWveXhu4K6sELlOsjYzwtEcXPjfCq/aDKLNzopzt5lGvK1fWzrhLLSV3CTdbkVPSPdjZyptgsxUTZX8oFFiSXFVXZXYS0ifvt5SOMi6rXjKcr7YnrUP/vjXROv1imqHC0rdVaQPhfGy3+c773kbacar/snv8TuZdZ6fw/tZkS8kiZIRnD8w9mV+bLnVUOb96zDtZOwvNp7ROrnSdWSbp7udxcGx2Akdtr5Wckm73we2sfVDNL0lmn2GfmU26+OJYRb30+5j8fbYb42YhgapOFiz/fFUHnRXSocL5anvfnz2z25ss317YsMwK6SZGznb98njwMP82XT8DtbGX9YHqGg69GRy0ubfyIjLCO3nff25DK3MWICM8d2QjcEZLaZ3J/pmjYIEiBwvtckKdNcCyD9oPmL9IuV/GXbft0lnp9Wh5Xe32JhkfvIO6n4eiXD/3h2f19YNettyRN5y9zzhcur1qutKF6ILXBvJGd89d9nrtQPWnHlUI7eOaDvmtRw9U4AuN5r0gbChNdLkz06lXfbRSwUa2mSNOHcdZo/q1sLAXx83QzBvOsvaZ67TwP22vQFe6mrrgtc7siHy6uHhz+aa5k250A1eF6fV2VBNkFF1z9z63Hu15yn0ImSfvOPpxV0tGQ1razS4JzSLhPB95bBcJ6cJd6WrogtdGsl6rMkum4pHqsBwjvGBCTOcLm10Sq1bD3d/fes5WypOTdzyErtLpYv/31H7Qsx6qhcI5kTukS3Wlq7ALXqvp9Om9jqJOly3NKg70E1WToheEDaXOkrvr5rOVI1UxN6jw2U7AOmy5OK00GevaqDzYFVVSzhAM0rvjutSudBV0wWuzeaVB50YGeUnjoSL1+kVo/4sgV6XWkrvr7Gxl4XX8wm/H77UMcUbv6WH/5fzitCN3IleHQjpIQHucvh0spL260q1JSLvnYkNlNg8ycbwSp87KDKvqEZ7X1T5myy3jkrf0TXj0TK6Cm614XO+y/HbOjjxboM5C2u7PeYNVKkHkilB2KfP6klGnQnpDlZSjt0bpVqW5utIFbFXaNvLmija+/GDMxTOv0bOO6j/IVhEZ4emoJ++BkapA1Ov9lFVaZ6ab35VtJu9qp9M+CBoouUtIeJ6833qRVcJZlrmUNrO9HZ/3sOzPNlhlyeMgvrz1t7TnX543Vw0TLz1XIAnp+22/KECpgC7Q+KhwSBfqSteBkLZZ8Nh+yu/k+JaRUhcyqvD/jtW49JUzq4/esiFtsk8OycmrtM7zzMEsMsW3j2En7T7zkrsj1QCZrczro3dURdxrefgfT7WKfVvIjmQ0bcN13+4zx3LNTa2isfsfbQZGarm13T9i4zNTDxLSIftBXzfYPXc7eOEljqJd6VSB5Y4i4Zxo/XLHbPQwynHLa9yV5ue+3Hq052nKuXiU1pmpyd3XZRE3xc+qTGmg5O6rzW9uyoHZsaqQqx4pdmxhW0rxjDLP3G1eOZbzeIwN6S+t7llTOKDjaf7Octd4h3SZcE4U6YK3KlyT9hUkTZVCr0d7lNa5K3arQOwoOrusrYGSu8RVk/+qt1OwYVsAx+bTrVYvgRYO6ABPamZIhwjnVWh8VJR77F24cGxBIUd4PqV1OvQBytsbr7Lu0lTJXcI1+a9itnJzO3WHtF2qynNh66aUquKoMqQJ53JmV1dZ7ccecoTnU1qX1VY0L8964MZK7hJutuJZcVFqOy5PVOVlfpILg4dnrQ9nUbrMroqQJpxLkJFBrO8Pvz/PHJ2tghAjPJ/SOmPMuyqO+PvUAzdVcnedXHRW1VAf7fqvxNP7pkAPdw/Hbt/oUC4EqYMOE9Jfrg7kFb1MVWLtwtkebJKresibz40MHq3WQcEsOS46u5CU1mXeSfcOVAW8DxbWeYmvBfJcdLb0tqQRmLRiiKf3ggS1G7Sop4Pd8++6tm+UroNO+PaTXk4/Tqot7JP5WBXUtnCWxjBRFGbkYbQe6HnPWHfgU7uLax6HWmcO+bs6Uz3WvfTLPZnPgXZ4uejsxeV/LvvvODa/Lfr3k4+Dgbm4HKUuNdhQGj74vbIpvlzmS2/o9FHypRvhHy38fqPfpV2FJJ6qf6gA5H128n/99N/1c7gAl6C2f+zZGc6+Ur0dt91Z469R6jfOezSb2eM+KhPKMvBRDcpRTOvHhvR+1QXuy6zzmjOwLtxy6O3L2Qw70gN3pXA7GFA9O3iZbk7afvJJHsEDWjQR0oQzgFVTSUCLOkOacAawiioLaFFHSBPOAFZVpQEtqgxpwhnAKqs8oEUVIU04A1h1tQS0CBnShDOAdVBbQIsQIU04A1gXtQa0KBPShDOAdVJ7QIsiIU04A1g3jQS0yBPShDOAddRYQAufkCacAayrRgNapIU04QxgnTUe0GJRSBPOANASEtKTw76R28nh1r4CALSHhDThDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDHvwGK6vzkica1lwAAAABJRU5ErkJggg=="
                            alt="" /></a>
                    </div>
                    <div className="navText"><a href="./butcrypto.html">Buy Crypto </a></div>
                    <div className="navText"><a href="./market.html">Markets</a></div>
                    <div className="navText"><a href="">Trade<svg className="dropdown-icon" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.432 15.698a.9.9 0 001.205-.061l6-6 .061-.069a.9.9 0 00-1.266-1.266l-.069.061L12 13.727 6.637 8.363a.9.9 0 00-1.274 1.274l6 6 .069.061z"
                            fill="currentColor"></path>
                    </svg></a></div>
                    <div className="navText"><a href="">Futures<svg className="dropdown-icon" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.432 15.698a.9.9 0 001.205-.061l6-6 .061-.069a.9.9 0 00-1.266-1.266l-.069.061L12 13.727 6.637 8.363a.9.9 0 00-1.274 1.274l6 6 .069.061z"
                            fill="currentColor"></path>
                    </svg></a></div>
                    <div className="navText"><a href="">Earn<svg className="dropdown-icon" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.432 15.698a.9.9 0 001.205-.061l6-6 .061-.069a.9.9 0 00-1.266-1.266l-.069.061L12 13.727 6.637 8.363a.9.9 0 00-1.274 1.274l6 6 .069.061z"
                            fill="currentColor"></path>
                    </svg></a></div>
                    <div className="navText"><a href="">Square<svg className="dropdown-icon" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.432 15.698a.9.9 0 001.205-.061l6-6 .061-.069a.9.9 0 00-1.266-1.266l-.069.061L12 13.727 6.637 8.363a.9.9 0 00-1.274 1.274l6 6 .069.061z"
                            fill="currentColor"></path>
                    </svg></a></div>
                    <div className="navText"><a href="">More<svg className="dropdown-icon" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.432 15.698a.9.9 0 001.205-.061l6-6 .061-.069a.9.9 0 00-1.266-1.266l-.069.061L12 13.727 6.637 8.363a.9.9 0 00-1.274 1.274l6 6 .069.061z"
                            fill="currentColor"></path>
                    </svg></a></div>
                </div>
                <div className="navp2 navpart">
                    <div className="icon n2">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeMiterlimit="10" strokeWidth="1.5"
                                    d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                            </svg>
                        </a>
                    </div>
                    <div className=" n2">
                        <span className="li navbtn">
                            <a href="./login">Log in</a>
                        </span>
                    </div>
                    <div className=" n2">
                        <span className="su navbtn">
                            <a href="./signin.html">Sign Up</a>
                        </span>
                    </div>
                    <div className="icon last3icon n2">
                        <a href="">
                            <svg viewBox="0 0 100 100" style={{ width: "1.5rem", height: "1.5rem" }}
                                xmlns="http://www.w3.org/2000/svg">
                                <line x1="10" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="10" y1="10" x2="10" y2="40" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="10" y1="60" x2="10" y2="80" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="90" y1="10" x2="90" y2="40" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="90" y1="60" x2="90" y2="80" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <line x1="50" y1="38" x2="50" y2="62" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" />
                                <polyline points="45,57 50,67 55,57" fill="none" stroke="currentColor" strokeWidth="6"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="icon last3icon n2">
                        <a href="">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.863 1.901c1.279-.325 2.658-.332 3.565.575.69.69.845 1.661.748 2.608-.098.956-.463 2.038-1.012 3.165-.077.157-.159.316-.244.476.375 1.021.58 2.124.58 3.275 0 5.246-4.253 9.5-9.5 9.5a9.484 9.484 0 01-3.274-.58c-.16.084-.32.166-.477.243-1.127.55-2.209.916-3.165 1.014-.946.096-1.917-.06-2.607-.75-.848-.848-.894-2.11-.639-3.295.2-.922.61-1.95 1.183-3.028a9.5 9.5 0 0112.37-11.978c.535-.363 1.548-.99 2.472-1.225zM4.046 17.193c-.168.434-.38 1.004-.448 1.317-.214.993-.035 1.457.152 1.644.151.15.475.3 1.15.232.496-.051 1.103-.215 1.802-.5a9.549 9.549 0 01-2.656-2.693zm15.486-6.195c-1.047 1.518-2.368 3.103-3.9 4.635-1.531 1.531-3.116 2.852-4.634 3.899a7.6 7.6 0 008.534-8.534zM4.467 13a7.605 7.605 0 004.256 5.857l.168-.102c-.729-1.49-1.184-3.528-1.273-5.755h-3.15zm4.953 0c.085 1.916.462 3.574.987 4.746a32.592 32.592 0 003.953-3.387c.085-.085.168-.17.25-.256.005-.304.003-.72-.002-1.103H9.42zm5.283-8.105c.223.35.424.736.6 1.149.594 1.388.975 3.186 1.072 5.155h.782c.66-.853 1.23-1.688 1.7-2.479a7.624 7.624 0 00-4.154-3.825zm-5.407 0A7.606 7.606 0 004.442 11.2h3.183c.097-1.969.48-3.767 1.073-5.155.176-.412.375-.8.598-1.149zm2.705.004c-.178 0-.424.08-.73.383-.31.306-.63.795-.918 1.469-.486 1.137-.83 2.686-.925 4.448h5.144c-.095-1.762-.438-3.311-.924-4.448-.288-.674-.608-1.163-.918-1.469-.306-.302-.552-.383-.73-.383zm8.154-1.15c-.203-.203-.727-.389-1.85-.104-.35.089-.716.257-1.053.439a9.55 9.55 0 012.634 2.617c.285-.699.448-1.305.5-1.8.068-.676-.08-1.001-.231-1.152z"
                                    fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="icon last3icon n2">
                        <a href="">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 12c0-3.781 2.1-7.07 5.195-8.77.711-.39 1.461.32 1.37 1.126l-.028.282A10.11 10.11 0 008.5 5.5l.013.514a10 10 0 009.472 9.472l.515.013c.388 0 .77-.022 1.146-.065.805-.092 1.516.658 1.126 1.37l-.164.286A9.993 9.993 0 0112 22v-1.8a8.178 8.178 0 006.258-2.905C11.933 17.168 6.83 12.066 6.703 5.742a8.176 8.176 0 00-2.898 5.968L3.8 12a8.2 8.2 0 008.2 8.2V22l-.515-.014a10 10 0 01-9.472-9.472L2 12z"
                                    fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="icon threeline n2">
                        <svg className="bn-svg hover-color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4 4h16v3H4V4zm0 6.5h16v3H4v-3zM20 17H4v3h16v-3z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
