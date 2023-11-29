export const healthyController = async (req,res) => {
  try {
    // ... Your Code Here

    // Success Code
    res.status(200).json({
      status: "success",
      message: "API is Healthy"
    })

  } catch (error) {
    // Error Code
    res.status(500).json({
      status: "error",
      message: `Internal Server Error: ${error}`
    })
  }
}