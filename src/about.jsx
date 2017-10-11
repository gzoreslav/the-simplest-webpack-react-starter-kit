import React from 'react';

const About = () => {
    return (
        <div className="content">
            <h2>The simplest webpack starter kit for React</h2>
            <ul>
                <li>build with official recommendations
                    from <a href="https://webpack.js.org" target="_blank">webpack</a> and <a href="http://babeljs.io/">babel</a></li>
                <li>no flux included - use one that you prefer</li>
                <li>no build-in-js styles and other resources, separate files used</li>
            </ul>
            <p>and also...</p>
            <ul>
                <li>clear package.json - just react libs in dependencies and no unused libs in devDependencies</li>
                <li>no mess with npm scripts - just <strong>npm start</strong> for development
                    and <strong>npm run build</strong> for building production content</li>
                <li>script just copy additional resources from static folder - no pain with adding fonts, images, etc.</li>
                <li>default HMR in development mode for js and styles as well</li>
                <li>no production node server included - use one that you prefer</li>
                <li>webpack builder does not use NODE_ENV variables - do not worry about this</li>
                <li>no test included - you may add them later</li>
            </ul>
            <h2>How to use?</h2>
            <p className="code">
                > git clone ...<br/>
                > cd app_dir<br/>
                > npm install
            </p>
            <h3>Development mode</h3>
            <p className="code">
                > npm start
            </p>
            <p>It compiles the code in development mode (source-map files, HMR) and opens browser tab. You do not need
                to re-run start script when you make a changes - code will be re-compiled automatically.</p>
            <h3>Production mode</h3>
            <p className="code">
                > npm run build
            </p>
            <p>It compiles the code in production mode (no source-map files, minify and uglify js files) and put all files in "dist"
                folder. Just copy the folder content to the server.</p>
        </div>
    );
};

export default About;