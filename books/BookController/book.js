const books = require("../BookModel/book")

exports.createbook = async (req, res) => {
    const book = await new books(req.body)

    book.save().then(()=>{
        res.json({message:"Book created"})
    })
    .catch(()=>{
        res.json({message:"Book is not created"})
    })

}

exports.getbooks = async(req,res) =>{
    try{
        const getbooks = await books.find()
        res.json(getbooks)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

exports.getonebook = async(req,res)=>{
    try{
        const _id = req.params.bookid
        const getonebook = await books.findById(_id)
        if(getonebook){
            res.json(getonebook)
        }else{
            console.log("getone book error")
        }
      
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}

exports.deletebook = async(req,res)=>{
    try{
        const _id= req.params.bookid
        const deletebook = await books.findByIdAndRemove(_id).then(()=>{
            res.json({message:"Book deleted"})
        }).catch(()=>{
            res.json({message:"Book delete error"})
        })
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}