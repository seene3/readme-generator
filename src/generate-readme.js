module.exports = readMeData => {
    console.log(readMeData)
    return `
    # ${readMeData.projectName}

    ## Description
    ${readMeData.projectDescription}

    ## Project Languages
    ${readMeData.projectLang}

    ## Project Contributers
    ${readMeData.projectContributers}
    `
}